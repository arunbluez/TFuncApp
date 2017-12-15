import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'ion-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Control at your tips',
    group: true,
  },
  {
    title: 'Rooms',
    icon: 'ion-grid',
    link: '/pages/rooms',
    children: [
      {
        title: 'Living Room',
        link: '/pages/rooms/room1',
      },
      {
        title: 'Hallway',
        link: '/pages/rooms/room2',
      },
      {
        title: 'Bedroom',
        link: '/pages/rooms/room3',
      },
      {
        title: 'Kitchen',
        link: '/pages/rooms/room4',
      },
    ],
  },
  {
    title: 'Smart Energy Module',
    icon: 'ion-flash',
    children: [
      {
        title: 'Readings',
        link: '/pages/energy/reading',
      },
      {
        title: 'Settings',
        link: '/pages/energy/settings',
      },
    ],
  },
  {
    title: 'Smart Camera Module',
    icon: 'ion-videocamera',
    children: [
      {
        title: 'Live View',
        link: '/pages/camera/view',
      }, {
        title: 'Settings',
        link: '/pages/camera/settings',
      },
    ],
  },
  {
    title: 'General Settings',
    icon: 'ion-gear-b',
    link: '/pages/settings',
    children: [
      {
        title: 'Module Settings',
        link: '/pages/settings/module',
      },
      {
        title: 'App Settings',
        link: '/pages/settings/app',
      },
      {
        title: 'Profile Settings',
        link: '/pages/settings/profile',
      },
    ],
  },
  {
    title: 'Serive Technicians',
    icon: 'ion-settings',
    children: [
      {
        title: 'Generate Auth Code',
        link: '/pages/service/authCode',
      },
      {
        title: 'Import Modules',
        link: '/pages/service/import',
      },
      {
        title: 'User management',
        link: '/pages/service/users',
      },
    ],
  },
  {
    title: 'Admin',
    icon: 'ion-paper-airplane',
    children: [
      {
        title: 'Server Settings',
        link: '/pages/admin/server/settings',
      },
      {
        title: 'Server management',
        link: '/pages/admin/server/management',
      },
      {
        title: 'User management',
        link: '/pages/admin/user-management',
      },
      {
        title: 'Servic management',
        link: '/pages/admin/service/management',
      },
    ],
  },
];
