'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from 'lucide-react';
import { type z } from 'zod';

import { createTag } from '@/app/_actions/tag';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { type CreateTagReq, createTagReqSchema } from '@/typings/tag';

export function CreateTagButton() {
  const [open, setOpen] = React.useState(false);
  const form = useForm<z.infer<typeof createTagReqSchema>>({
    resolver: zodResolver(createTagReqSchema),
    defaultValues: {
      name: '',
      friendlyUrl: '',
    },
  });

  React.useEffect(() => {
    if (open) {
      form.reset();
      form.clearErrors();
    }
  }, [form, open]);

  async function onSubmit(values: CreateTagReq) {
    try {
      await createTag(values);
      setOpen(false);
    } catch (e) {}
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button onClick={() => setOpen(true)}>
          <PlusIcon className="mr-2" size={16} />
          创建标签
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>创建标签</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>名称</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入标签名称" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="friendlyUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>链接</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入标签链接" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button type="submit">创建</Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
