import { SideNav } from '@/components/navbar';
import { SignOutButton } from '@/components/sign-out-button';
import { SwitchTheme } from '@/components/switch-theme';

import { auth } from '@/libs/auth';

import { PLACEHOLDER_COVER } from '@/constants/unknown';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="flex">
      <div className="min-w-[256px] max-w-[256px] h-screen bg-foreground flex-col flex items-center p-2 gap-2">
        <img
          src={session?.user?.image ?? PLACEHOLDER_COVER}
          className="border w-[200px] h-[200px]  my-6"
          alt={session?.user?.name ?? ''}
        />

        <div className="w-full flex-1 flex-col flex items-center">
          <SideNav />
        </div>

        <SignOutButton />
      </div>
      <div className="h-screen overflow-scroll flex flex-1 p-8 flex-col">
        {children}
      </div>

      <div className="fixed w-12 h-12 grid place-content-center right-12 top-6">
        <SwitchTheme variant={'outline'} />
      </div>
    </div>
  );
}
