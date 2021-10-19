import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiMonitorClean,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive
} from '@mdi/js'

export default [
  'Manage',
  [
    {
      to: '/admin/dashboard',
      icon: mdiDesktopMac,
      label: 'AdminDashboard'
    }
  ],
  [
    {
      to: '/admin',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    }
  ],
  'Settings',
  [
    {
      to: '/admin/tables',
      label: 'Tables',
      icon: mdiTable,
      updateMark: true
    },
    {
      to: '/admin/forms',
      label: 'Forms',
      icon: mdiSquareEditOutline
    },
    {
      to: '/admin/ui',
      label: 'UI',
      icon: mdiTelevisionGuide
    },
    {
      to: '/admin/responsive',
      label: 'Responsive',
      icon: mdiResponsive
    },
    {
      to: '/admin/profile',
      label: 'Profile',
      icon: mdiAccountCircle
    },
    {
      to: '/admin/login',
      label: 'Login',
      icon: mdiLock
    },
    {
      to: '/admin/error',
      label: 'Error',
      icon: mdiAlertCircle
    },
    {
      label: 'Submenus',
      subLabel: 'Submenus Example',
      icon: mdiViewList,
      menu: [
        {
          label: 'Sub-item One'
        },
        {
          label: 'Sub-item Two'
        }
      ]
    }
  ],
  'About',
  [
    {
      href: 'https://justboil.me/tailwind-admin-templates/vue-dashboard',
      label: 'Premium version',
      icon: mdiMonitorClean,
      target: '_blank'
    },
    {
      href: 'https://github.com/justboil/admin-one-vue-tailwind',
      label: 'GitHub',
      icon: mdiGithub,
      target: '_blank'
    }
  ]
]
