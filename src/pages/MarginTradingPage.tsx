/** @jsxImportSource @emotion/react */
import 'twin.macro'

import { useState } from 'react'
import { useAsync } from 'react-use'
import { FixedNumber } from 'ethers'
import { ArrowRight, FadersHorizontal, XCircle } from 'phosphor-react'
import { tokens } from '@ithil-protocol/deployed/latest/tokenlist.json'
import { addresses } from '@ithil-protocol/deployed/latest/addresses.json'

import { Button } from '../shared/Button'
import { ChartCard } from '../shared/charts/ChartCard'
import { ContentContainer } from '../shared/ContentContainer'
import { InfoItem } from '../shared/InfoItem'
import { InputField } from '../shared/InputField'
import { InputFieldMax } from '../shared/InputFieldMax'
import { RadioGroup } from '../shared/RadioGroup'
import { SliderBar } from '../shared/SliderBar'
import { TabsSwitch } from '../shared/TabsSwitch'
import { useIsConnected } from '../shared/hooks/useIsConnected'
import { Txt } from '../shared/Txt'
import { showErrorNotification } from '../shared/notification'
import { useApprovalAction } from '../shared/hooks/useApprovalAction'
import { TokenField } from './TokenField'
import { etherGlobal } from '../api/ether'
import { getCTALabelForApproval } from '../utils'
import { useAddTransaction } from '../state/hooks'
import { Priority, TokenDetails, TransactionType } from '../types'
import AdvancedSectionImg from '../assets/images/advancedSectionImage.png'

export const MarginTradingPage = () => {
  const addTx = useAddTransaction()
  const [positionType, setPositionType] = useState<'short' | 'long'>('long')
  const [spentToken, setSpentToken] = useState<TokenDetails>(tokens[0])
  const [obtainedToken, setObtainedToken] = useState<TokenDetails>(tokens[1])
  const [leverage, setLeverage] = useState<number>(1)
  const [margin, setMargin] = useState<string>('2')
  const [slippage, setSlippage] = useState<any>(1)
  const [deadline, setDeadline] = useState<any>(20)
  const [showAdvancedOptions, setShowAdvancedOptions] = useState<any>(false)
  const [priority, setPriority] = useState<Priority>('buy')
  const [isLoading, setisLoading] = useState(false)
  const [Status, setStatus] = useState('')
  const [buttonText, setButtonText] = useState<any>('')

  const [minObtained, setMinObtained] = useState<FixedNumber>(
    FixedNumber.from('0'),
  )
  const [maxLeverage, setMaxLeverage] = useState<FixedNumber>(
    FixedNumber.from('5'),
  )
  const [maxSpent, setMaxSpent] = useState<FixedNumber>(FixedNumber.from('0'))

  const isConnected = useIsConnected()
  useAsync(async () => {
    try {
      if (isConnected && slippage && margin) {
        setMaxLeverage(
          await etherGlobal.position.getMarginStrategy().getMaxLeverage(),
        )
        const [max, min] = await etherGlobal.position
          .getMarginStrategy()
          .computeMaxAndMin({
            margin,
            leverage,
            priority,
            positionType,
            slippage,
            deadline,
            obtainedToken: obtainedToken.address,
            spentToken: spentToken.address,
          })
        setMinObtained(min)
        setMaxSpent(max)
      }
    } catch (error) {
      console.error(error)
      showErrorNotification(`Can't compute min obtained and max spent`)
    }
  }, [
    isConnected,
    spentToken.address,
    obtainedToken.address,
    margin,
    leverage,
    priority,
    positionType,
    slippage,
  ])

  const [, setOpenPositionHash] = useState<string | undefined>(undefined)

  const CreatePosition = async (tokenAddress: string) => {
    const getMax = await etherGlobal.getMaxDepositAmount(tokenAddress)
    if (parseFloat(margin) > getMax) {
      setButtonText('INSUFFICIENT FUNDS')
    } else {
      setisLoading(true)
      openPosition()
    }
  }
  const [positionApproval, openPosition] = useApprovalAction({
    approvalMeta: {
      token: spentToken.address,
      destination: addresses.MarginTradingStrategy,
      amount: Number.MAX_SAFE_INTEGER,
    },
    onApproval: async () => {
      const positionData = {
        positionType,
        spentToken: spentToken.address,
        obtainedToken: obtainedToken.address,
        margin,
        slippage,
        leverage,
        priority,
        deadline,
      }
      try {
        setisLoading(true)
        setStatus('Transaction Pending')
        const position = await etherGlobal.position
          .getMarginStrategy()
          .openPosition(positionData)
        let txReceipt
        do {
          txReceipt = await etherGlobal.getSerializableTransactionReceipt(
            position.hash,
          )
        } while (txReceipt?.status == undefined || txReceipt?.status == null)
        if (txReceipt?.status != 0) {
          setStatus('Transaction Verified')
          setisLoading(false)
        } else {
          setStatus('Transaction Failed')
          setisLoading(false)
        }

        addTx(TransactionType.MTS_OPEN_POSITION, position.hash, positionData)
        setOpenPositionHash(position.hash)
      } catch (error) {
        setStatus('Transaction Failed')
        setisLoading(false)
        console.error(error)
      }
    },
  })
  return (
    <ContentContainer>
      <div tw='flex flex-col w-full items-center'>
        <div tw='w-full tablet:w-9/12 desktop:w-10/12 flex flex-col items-center'>
          <Txt.Heading1 tw='mb-12'>Margin Trading Strategy </Txt.Heading1>
          <div tw='w-full flex flex-col desktop:flex-row gap-6'>
            <link
              href='https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css'
              rel='stylesheet'
            />

            <div tw='flex flex-col gap-3 flex-grow w-full desktop:w-4/12'>
              <div tw='flex flex-col justify-between items-center rounded-xl p-5 bg-primary-100 gap-7'>
                <TabsSwitch
                  activeIndex={positionType}
                  onChange={(value: any) => setPositionType(value)}
                  items={[
                    {
                      title: 'Long',
                      value: 'long',
                    },
                    {
                      title: 'Short',
                      value: 'short',
                    },
                  ]}
                />
                <div tw='flex w-full justify-between items-center'>
                  <TokenField
                    token={spentToken}
                    onTokenChange={(value) => setSpentToken(value)}
                  />
                  <ArrowRight size={28} tw='text-font-200 mx-6' />
                  <TokenField
                    token={obtainedToken}
                    onTokenChange={(value) => setObtainedToken(value)}
                  />
                </div>
                <div tw='w-full'>
                  <InfoItem
                    tooltipText='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                    label='Leverage'
                    value={`${leverage}x`}
                  />
                  <InfoItem
                    tooltipText='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                    label='Min. obtained'
                    value={minObtained.round(4).toString()}
                  />
                  <InfoItem
                    tooltipText='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                    label='Max. spent'
                    value={maxSpent.round(4).toString()}
                  />
                </div>
                <InputFieldMax
                  label='Margin'
                  placeholder='0'
                  unit={spentToken.symbol}
                  address={spentToken.address}
                  value={margin.toString()}
                  StateChanger={setMargin}
                  onChange={(value) => {
                    setMargin(value)
                    setButtonText('')
                  }}
                  renderRight={
                    <Txt.InputText tw='text-font-100'>
                      {spentToken.symbol}
                    </Txt.InputText>
                  }
                />
                <SliderBar
                  label='Leverage'
                  tooltipText='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                  min={1}
                  max={Number(maxLeverage.toString())}
                  step={0.2}
                  value={leverage}
                  onChange={(value) => setLeverage(value)}
                  marks={{
                    1: '1x',
                    2: '2x',
                    3: '3x',
                    4: '4x',
                    5: '5x',
                  }}
                />
                <div tw='w-full'>
                  {showAdvancedOptions ? (
                    <>
                      <div tw='my-4 w-full flex flex-row justify-between items-center'>
                        <Txt.Heading2>Advanced options</Txt.Heading2>
                        <div>
                          <button
                            tw='my-4 w-full flex justify-center items-center gap-2'
                            onClick={() =>
                              setShowAdvancedOptions(!showAdvancedOptions)
                            }
                          >
                            <XCircle size={20} tw='text-font-100' />
                          </button>{' '}
                        </div>
                      </div>
                      <img
                        tw='w-full my-5'
                        src={AdvancedSectionImg}
                        alt='advancedSectionPlaceholder'
                      />
                      <div tw='flex flex-col w-full gap-7'>
                        <InputField
                          tooltipText='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                          label='Slippage'
                          placeholder='0'
                          value={slippage}
                          onChange={(value) => setSlippage(value)}
                          renderRight={
                            <Txt.InputText tw='text-font-100'>%</Txt.InputText>
                          }
                        />
                        <RadioGroup
                          tooltipText='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                          label='Priority'
                          items={[
                            {
                              label: 'Buy',
                              value: 'buy',
                            },
                            {
                              label: 'Sell',
                              value: 'sell',
                            },
                          ]}
                          activeRadio={priority}
                          onChange={(value) => setPriority(value as Priority)}
                        />
                        <InputField
                          tooltipText='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                          label='Deadline'
                          placeholder='30 mins'
                          value={deadline}
                          onChange={(value) => setDeadline(value)}
                          renderRight={
                            <Txt.InputText tw='text-font-100'>
                              min
                            </Txt.InputText>
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <button
                      tw='my-4 w-full flex justify-center items-center gap-2'
                      onClick={() =>
                        setShowAdvancedOptions(!showAdvancedOptions)
                      }
                    >
                      <FadersHorizontal size={20} tw='text-font-100' />
                      <Txt.Body2Regular tw='text-font-100'>
                        Advanced options
                      </Txt.Body2Regular>
                    </button>
                  )}
                </div>
                <Button
                  text={
                    buttonText
                      ? buttonText
                      : getCTALabelForApproval(
                          `${priority.toUpperCase()} / ${positionType.toUpperCase()} TKN`,
                          positionApproval,
                        )
                  }
                  full
                  action
                  bold
                  isLoading={isLoading}
                  onClick={() => {
                    CreatePosition(spentToken.address)
                  }}
                />
                <Txt.CaptionMedium>{Status}</Txt.CaptionMedium>
              </div>
            </div>
            <ChartCard
              firstToken={obtainedToken}
              secondToken={spentToken}
              disableTrading={false}
            />
          </div>
        </div>
      </div>
    </ContentContainer>
  )
}
