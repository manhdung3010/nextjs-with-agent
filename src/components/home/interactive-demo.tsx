"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function InteractiveDemo() {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleShowToast = () => {
    if (!name.trim()) {
      toast.error("Vui lòng nhập tên của bạn!");
      return;
    }
    toast.success(`Xin chào, ${name}! Bạn đã kích hoạt toast thành công! ✨`);
  };

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-lg font-semibold">Trải nghiệm UI Components</h2>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
        Nhập tên để kiểm tra hoạt động tương tác giữa các component mới được
        tích hợp (`Button`, `Input`, `Dialog`, `Sonner toast`).
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Nhập tên của bạn..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex gap-2">
          <Button onClick={handleShowToast} variant="default">
            Trigger Toast
          </Button>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Xin chào từ dự án!</DialogTitle>
                <DialogDescription>
                  Chào mừng{" "}
                  {name ? (
                    <strong className="text-blue-600 dark:text-blue-400">
                      {name}
                    </strong>
                  ) : (
                    "bạn"
                  )}{" "}
                  đến với nền tảng Next.js hiện đại này.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 text-sm text-zinc-600 dark:text-zinc-300">
                Dialog này chạy trên nền tảng **Radix UI** nguyên bản, được tối
                ưu hoàn toàn về styling và hỗ trợ tốt cho bàn phím cũng như
                screen reader.
              </div>
              <DialogFooter showCloseButton />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
