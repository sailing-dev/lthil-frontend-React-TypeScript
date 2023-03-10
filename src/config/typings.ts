import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  EventFilter,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { EventFragment, FunctionFragment, Result } from '@ethersproject/abi'
import { Listener, Provider } from '@ethersproject/providers'

export interface TypedEvent<
  TArgsArray extends Array<any> = any,
  TArgsObject = any,
> extends Event {
  args: TArgsArray & TArgsObject
}

export interface OnEvent<TRes> {
  <TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
    listener: TypedListener<TEvent>,
  ): TRes
  (eventName: string, listener: Listener): TRes
}

export interface TypedEventFilter<_TEvent extends TypedEvent>
  extends EventFilter {}

type __TypechainArgsArray<T> = T extends TypedEvent<infer U> ? U : never

export interface TypedListener<TEvent extends TypedEvent> {
  (...listenerArg: [...__TypechainArgsArray<TEvent>, TEvent]): void
}

export interface VaultInterface extends utils.Interface {
  contractName: 'Vault'
  functions: {
    'addStrategy(address)': FunctionFragment
    'balance(address)': FunctionFragment
    'borrow(address,uint256,uint256,uint256,address)': FunctionFragment
    'claimable(address)': FunctionFragment
    'owner()': FunctionFragment
    'removeStrategy(address)': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'repay(address,uint256,uint256,uint256,address)': FunctionFragment
    'stake(address,uint256)': FunctionFragment
    'strategies(address)': FunctionFragment
    'toggleLock(bool,address)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
    'unstake(address,uint256)': FunctionFragment
    'vaults(address)': FunctionFragment
    'whitelistToken(address,uint256,uint256)': FunctionFragment
    'whitelistTokenAndExec(address,uint256,uint256,bytes)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'addStrategy', values: [string]): string
  encodeFunctionData(functionFragment: 'balance', values: [string]): string
  encodeFunctionData(
    functionFragment: 'borrow',
    values: [string, BigNumberish, BigNumberish, BigNumberish, string],
  ): string
  encodeFunctionData(functionFragment: 'claimable', values: [string]): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'removeStrategy',
    values: [string],
  ): string
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'repay',
    values: [string, BigNumberish, BigNumberish, BigNumberish, string],
  ): string
  encodeFunctionData(
    functionFragment: 'stake',
    values: [string, BigNumberish],
  ): string
  encodeFunctionData(functionFragment: 'strategies', values: [string]): string
  encodeFunctionData(
    functionFragment: 'toggleLock',
    values: [boolean, string],
  ): string
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string
  encodeFunctionData(
    functionFragment: 'unstake',
    values: [string, BigNumberish],
  ): string
  encodeFunctionData(functionFragment: 'vaults', values: [string]): string
  encodeFunctionData(
    functionFragment: 'whitelistToken',
    values: [string, BigNumberish, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'whitelistTokenAndExec',
    values: [string, BigNumberish, BigNumberish, BytesLike],
  ): string

  decodeFunctionResult(functionFragment: 'addStrategy', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'borrow', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'claimable', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'removeStrategy',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'repay', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'strategies', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'toggleLock', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'unstake', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'vaults', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'whitelistToken',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'whitelistTokenAndExec',
    data: BytesLike,
  ): Result

  events: {
    'Deposit(address,address,uint256,uint256)': EventFragment
    'LoanRepaid(address,address,uint256)': EventFragment
    'LoanTaken(address,address,uint256)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
    'StrategyWasAdded(address)': EventFragment
    'StrategyWasRemoved(address)': EventFragment
    'TokenWasWhitelisted(address)': EventFragment
    'VaultLockWasToggled(bool,address)': EventFragment
    'Withdrawal(address,address,uint256,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'LoanRepaid'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'LoanTaken'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'StrategyWasAdded'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'StrategyWasRemoved'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TokenWasWhitelisted'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'VaultLockWasToggled'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Withdrawal'): EventFragment
}

export type DepositEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { user: string; token: string; amount: BigNumber; claimingPower: BigNumber }
>

export type DepositEventFilter = TypedEventFilter<DepositEvent>

export type LoanRepaidEvent = TypedEvent<
  [string, string, BigNumber],
  { borrower: string; token: string; amount: BigNumber }
>

export type LoanRepaidEventFilter = TypedEventFilter<LoanRepaidEvent>

export type LoanTakenEvent = TypedEvent<
  [string, string, BigNumber],
  { borrower: string; token: string; amount: BigNumber }
>

export type LoanTakenEventFilter = TypedEventFilter<LoanTakenEvent>

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>

export type StrategyWasAddedEvent = TypedEvent<[string], { strategy: string }>

export type StrategyWasAddedEventFilter =
  TypedEventFilter<StrategyWasAddedEvent>

export type StrategyWasRemovedEvent = TypedEvent<[string], { strategy: string }>

export type StrategyWasRemovedEventFilter =
  TypedEventFilter<StrategyWasRemovedEvent>

export type TokenWasWhitelistedEvent = TypedEvent<[string], { token: string }>

export type TokenWasWhitelistedEventFilter =
  TypedEventFilter<TokenWasWhitelistedEvent>

export type VaultLockWasToggledEvent = TypedEvent<
  [boolean, string],
  { status: boolean; token: string }
>

export type VaultLockWasToggledEventFilter =
  TypedEventFilter<VaultLockWasToggledEvent>

export type WithdrawalEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { user: string; token: string; amount: BigNumber; claimingPower: BigNumber }
>

export type WithdrawalEventFilter = TypedEventFilter<WithdrawalEvent>

// @ts-ignore
export interface Vault extends BaseContract {
  contractName: 'Vault'
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: VaultInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    addStrategy(
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    balance(token: string, overrides?: CallOverrides): Promise<[BigNumber]>

    borrow(
      token: string,
      amount: BigNumberish,
      collateral: BigNumberish,
      riskFactor: BigNumberish,
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    claimable(token: string, overrides?: CallOverrides): Promise<[BigNumber]>

    owner(overrides?: CallOverrides): Promise<[string]>

    removeStrategy(
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    repay(
      token: string,
      amount: BigNumberish,
      debt: BigNumberish,
      fees: BigNumberish,
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    stake(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    strategies(arg0: string, overrides?: CallOverrides): Promise<[boolean]>

    toggleLock(
      locked: boolean,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    unstake(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    vaults(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<
      [
        boolean,
        boolean,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
      ] & {
        supported: boolean
        locked: boolean
        wrappedToken: string
        creationTime: BigNumber
        baseFee: BigNumber
        fixedFee: BigNumber
        netLoans: BigNumber
        insuranceReserveBalance: BigNumber
      }
    >

    whitelistToken(
      token: string,
      baseFee: BigNumberish,
      fixedFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    whitelistTokenAndExec(
      token: string,
      baseFee: BigNumberish,
      fixedFee: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>
  }

  addStrategy(
    strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  balance(token: string, overrides?: CallOverrides): Promise<BigNumber>

  borrow(
    token: string,
    amount: BigNumberish,
    collateral: BigNumberish,
    riskFactor: BigNumberish,
    borrower: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  claimable(token: string, overrides?: CallOverrides): Promise<BigNumber>

  owner(overrides?: CallOverrides): Promise<string>

  removeStrategy(
    strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  repay(
    token: string,
    amount: BigNumberish,
    debt: BigNumberish,
    fees: BigNumberish,
    borrower: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  stake(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  strategies(arg0: string, overrides?: CallOverrides): Promise<boolean>

  toggleLock(
    locked: boolean,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  unstake(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  vaults(
    arg0: string,
    overrides?: CallOverrides,
  ): Promise<
    [
      boolean,
      boolean,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
    ] & {
      supported: boolean
      locked: boolean
      wrappedToken: string
      creationTime: BigNumber
      baseFee: BigNumber
      fixedFee: BigNumber
      netLoans: BigNumber
      insuranceReserveBalance: BigNumber
    }
  >

  whitelistToken(
    token: string,
    baseFee: BigNumberish,
    fixedFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  whitelistTokenAndExec(
    token: string,
    baseFee: BigNumberish,
    fixedFee: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  callStatic: {
    addStrategy(strategy: string, overrides?: CallOverrides): Promise<void>

    balance(token: string, overrides?: CallOverrides): Promise<BigNumber>

    borrow(
      token: string,
      amount: BigNumberish,
      collateral: BigNumberish,
      riskFactor: BigNumberish,
      borrower: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        interestRate: BigNumber
        fees: BigNumber
        debt: BigNumber
        borrowed: BigNumber
      }
    >

    claimable(token: string, overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<string>

    removeStrategy(strategy: string, overrides?: CallOverrides): Promise<void>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    repay(
      token: string,
      amount: BigNumberish,
      debt: BigNumberish,
      fees: BigNumberish,
      borrower: string,
      overrides?: CallOverrides,
    ): Promise<void>

    stake(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    strategies(arg0: string, overrides?: CallOverrides): Promise<boolean>

    toggleLock(
      locked: boolean,
      token: string,
      overrides?: CallOverrides,
    ): Promise<void>

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>

    unstake(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    vaults(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<
      [
        boolean,
        boolean,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
      ] & {
        supported: boolean
        locked: boolean
        wrappedToken: string
        creationTime: BigNumber
        baseFee: BigNumber
        fixedFee: BigNumber
        netLoans: BigNumber
        insuranceReserveBalance: BigNumber
      }
    >

    whitelistToken(
      token: string,
      baseFee: BigNumberish,
      fixedFee: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    whitelistTokenAndExec(
      token: string,
      baseFee: BigNumberish,
      fixedFee: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>
  }

  filters: {
    'Deposit(address,address,uint256,uint256)'(
      user?: string | null,
      token?: string | null,
      amount?: null,
      claimingPower?: null,
    ): DepositEventFilter
    Deposit(
      user?: string | null,
      token?: string | null,
      amount?: null,
      claimingPower?: null,
    ): DepositEventFilter

    'LoanRepaid(address,address,uint256)'(
      borrower?: string | null,
      token?: string | null,
      amount?: null,
    ): LoanRepaidEventFilter
    LoanRepaid(
      borrower?: string | null,
      token?: string | null,
      amount?: null,
    ): LoanRepaidEventFilter

    'LoanTaken(address,address,uint256)'(
      borrower?: string | null,
      token?: string | null,
      amount?: null,
    ): LoanTakenEventFilter
    LoanTaken(
      borrower?: string | null,
      token?: string | null,
      amount?: null,
    ): LoanTakenEventFilter

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter

    'StrategyWasAdded(address)'(strategy?: null): StrategyWasAddedEventFilter
    StrategyWasAdded(strategy?: null): StrategyWasAddedEventFilter

    'StrategyWasRemoved(address)'(
      strategy?: null,
    ): StrategyWasRemovedEventFilter
    StrategyWasRemoved(strategy?: null): StrategyWasRemovedEventFilter

    'TokenWasWhitelisted(address)'(
      token?: string | null,
    ): TokenWasWhitelistedEventFilter
    TokenWasWhitelisted(token?: string | null): TokenWasWhitelistedEventFilter

    'VaultLockWasToggled(bool,address)'(
      status?: null,
      token?: string | null,
    ): VaultLockWasToggledEventFilter
    VaultLockWasToggled(
      status?: null,
      token?: string | null,
    ): VaultLockWasToggledEventFilter

    'Withdrawal(address,address,uint256,uint256)'(
      user?: string | null,
      token?: string | null,
      amount?: null,
      claimingPower?: null,
    ): WithdrawalEventFilter
    Withdrawal(
      user?: string | null,
      token?: string | null,
      amount?: null,
      claimingPower?: null,
    ): WithdrawalEventFilter
  }

  estimateGas: {
    addStrategy(
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    balance(token: string, overrides?: CallOverrides): Promise<BigNumber>

    borrow(
      token: string,
      amount: BigNumberish,
      collateral: BigNumberish,
      riskFactor: BigNumberish,
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    claimable(token: string, overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    removeStrategy(
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    repay(
      token: string,
      amount: BigNumberish,
      debt: BigNumberish,
      fees: BigNumberish,
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    stake(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    strategies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    toggleLock(
      locked: boolean,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    unstake(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    vaults(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    whitelistToken(
      token: string,
      baseFee: BigNumberish,
      fixedFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    whitelistTokenAndExec(
      token: string,
      baseFee: BigNumberish,
      fixedFee: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>
  }

  populateTransaction: {
    addStrategy(
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    balance(
      token: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    borrow(
      token: string,
      amount: BigNumberish,
      collateral: BigNumberish,
      riskFactor: BigNumberish,
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    claimable(
      token: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    removeStrategy(
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    repay(
      token: string,
      amount: BigNumberish,
      debt: BigNumberish,
      fees: BigNumberish,
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    stake(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    strategies(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    toggleLock(
      locked: boolean,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    unstake(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    vaults(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    whitelistToken(
      token: string,
      baseFee: BigNumberish,
      fixedFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    whitelistTokenAndExec(
      token: string,
      baseFee: BigNumberish,
      fixedFee: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>
  }
}
