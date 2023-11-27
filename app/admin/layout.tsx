'use client';

import React from 'react';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@radix-ui/themes';

import { EmptyPage } from '@/components/client';
import { PageLoading, Unauthorized401Illustration } from '@/components/rsc';

const adminNavItems: NavItem[] = [
  {
    label: '文章管理',
    link: '/admin/article',
  },
  {
    label: '创建/编辑文章',
    link: '/admin/create-article',
  },
  {
    label: '标签管理',
    link: '/admin/tag',
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <div className="container pt-16 relative">
      {renderAdminNav()}
      {renderChildren()}
    </div>
  );

  function renderAdminNav() {
    return (
      <ul className="flex space-x-1 pb-8 sm:space-x-4">
        {adminNavItems.map((v) => (
          <li key={v.link}>
            <Link href={v.link}>
              <Button
                size={'4'}
                variant={pathname === v.link ? 'solid' : 'soft'}
              >
                {v.label}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  function renderChildren() {
    if (status === 'loading') {
      return <PageLoading />;
    }

    if (!session) {
      return (
        <EmptyPage
          className="h-[calc(100vh-320px)]"
          illustration={
            <Unauthorized401Illustration className="w-[320px] h-[320px] sm:w-[500px] sm:h-[500px]" />
          }
          title="达咩，请登录~"
          bottomOptionNode={
            <Button size={'4'} onClick={() => signIn()}>
              去登录
            </Button>
          }
        />
      );
    }

    return children;
  }
}
