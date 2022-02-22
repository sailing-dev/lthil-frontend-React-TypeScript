/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler } from 'react'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { isMobile } from '../../utils'
import tw from 'twin.macro'

interface ICustomTablePaginationProps {
  currentPage: number
  maxPage: number
  setPage(value: number): void
  canPreviousPage: boolean
  canNextPage: boolean
  pageSize: number
  totalOnPage: number
}

const createPaginationItems = (p: number, pageCount: number) => {
  const filterByPageCount = (i: number) => i > 0 && i <= pageCount

  if (p === 1) {
    return [1, 2, 3].filter(filterByPageCount)
  }
  if (p === pageCount) {
    return [pageCount - 2, pageCount - 1, pageCount].filter(filterByPageCount)
  }
  return [p - 1, p, p + 1]
}

const PaginationButton = (props: {
  icon?: any
  text?: string
  active: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}) => {
  const Icon = props.icon
  const text = props.text
  const active = props.active

  return (
    <button
      css={[
        tw`border-0 rounded-md cursor-pointer flex flex-row items-center px-2.5 py-2.5 bg-primary-200 width[36px] height[36px] flex justify-center items-center mx-1`,
        active && tw`bg-action text-primary-100`,
      ]}
      onClick={props.onClick}
    >
      {Icon && (
        <Icon css={[tw`text-secondary`, active && tw`text-primary-100`]} />
      )}
      {text && text}
    </button>
  )
}

export const CustomTablePagination = (props: ICustomTablePaginationProps) => {
  const { setPage, currentPage, maxPage } = props

  const paginationItems = createPaginationItems(currentPage, maxPage)

  return (
    <div css={tw`text-secondary  flex justify-center items-center`}>
      <button onClick={() => setPage(Math.max(1, currentPage - 1))}>
        <span tw='text-warning py-4'>
          <PaginationButton active={false} icon={ArrowLeft} />
        </span>
      </button>
      <div tw='flex flex-row items-center'>
        {paginationItems.map((page, i) => {
          return (
            <React.Fragment key={`${i}-${page}`}>
              <div onClick={() => setPage(page)}>
                <PaginationButton
                  active={page === currentPage}
                  text={page.toString()}
                />
              </div>
            </React.Fragment>
          )
        })}
      </div>
      <button onClick={() => setPage(Math.min(maxPage, currentPage + 1))}>
        <span tw='text-action py-4'>
          <PaginationButton active={false} icon={ArrowRight} />
        </span>
      </button>
    </div>
  )
}