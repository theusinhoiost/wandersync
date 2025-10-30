"use client";

import Link from "next/link";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/menubar";
import { User, Bell, CreditCard } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen">
      <Menubar className="border-b px-4">
        {/* Profile */}
        <MenubarMenu>
          <MenubarTrigger className="flex items-center gap-2">
            <User size={16} /> Profile
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link href="settings/profile/account">Account</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="settings/profile/preferences">Preferences</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="settings/profile/privacy">Privacy</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem asChild>
              <Link href="/logout">Logout</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Notifications */}
        <MenubarMenu>
          <MenubarTrigger className="flex items-center gap-2">
            <Bell size={16} /> Notifications
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link href="settings/notifications/activity">Activity</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="settings/notifications/invites">Trip Invites</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="settings/notifications/settings">
                Notification Settings
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Pay Area */}
        <MenubarMenu>
          <MenubarTrigger className="flex items-center gap-2">
            <CreditCard size={16} /> Pay Area
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link href="settings/pay-area/subscription">Subscription</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="settings/pay-area/group-payments">
                Group Payments
              </Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="settings/pay-area/history">Payment History</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem asChild>
              <Link href="settings/pay-area/support">Billing Support</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <main className="p-6">{children}</main>
    </div>
  );
}
