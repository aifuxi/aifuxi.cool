'use client';

import React from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { DEFAULT_PAGE_SIZE } from '@/constants/unknown';

import { PaginationButton } from './pagination-button';

interface PaginationButtonProps {
  total: number;
}

export const Pagination = ({ total }: PaginationButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = React.useTransition();

  // Search params
  const page = searchParams?.get('page') ?? '1';
  const pageCount = Math.ceil(total / DEFAULT_PAGE_SIZE);

  // Create query string
  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams],
  );

  // 只有一页数据或者不满一页数据，不展示分页组件
  if (total <= DEFAULT_PAGE_SIZE) {
    return null;
  }

  return (
    <PaginationButton
      pageCount={pageCount}
      page={page}
      createQueryString={createQueryString}
      router={router}
      pathname={pathname}
      isPending={isPending}
      startTransition={startTransition}
    />
  );
};
