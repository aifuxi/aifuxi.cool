'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { type z } from 'zod';

import { createUser } from '@/app/actions/user';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { type CreateUserReq, createUserReqSchema } from '@/typings/user';

// 暂时不支持注册用户，这个页面先放在这里，以 “_”开头的目录(_sign-up)，Next.js不会生成页面路由
export default function SignInPage() {
  const form = useForm<z.infer<typeof createUserReqSchema>>({
    resolver: zodResolver(createUserReqSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: CreateUserReq) {
    try {
      await createUser(values);
    } catch (e) {}
  }

  return (
    <div className="w-screen h-screen grid place-content-center">
      <Card className="w-[320px] sm:w-full sm:max-w-none sm:min-w-[360px]">
        <CardHeader>
          <CardTitle>创建用户</CardTitle>
          <CardDescription>请输入下面信息创建一个新用户</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
            <CardContent>
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>用户名</FormLabel>
                      <FormControl>
                        <Input placeholder="请输入用户名" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>邮箱</FormLabel>
                      <FormControl>
                        <Input placeholder="请输入邮箱地址" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>密码</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="请输入密码"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>确认密码</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="请输入再次输入密码"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="grid gap-2">
              <Button type="submit">创建</Button>
              <Button
                variant="outline"
                type="button"
                onClick={() => form.reset()}
              >
                重置
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
