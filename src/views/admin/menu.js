import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiCommaBox,
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
      label: 'Dashboard'
    },
    {
      to: '/admin/staff',
      icon: mdiAccountCircle,
      label: 'Staff'
    },
    {
      to: '/admin/rooms',
      icon: mdiTable,
      label: 'Rooms',
    },
    {
      to: '/admin/health',
      icon: mdiTable,
      label: 'Health',
    },
    {
      to: '/admin/foodselection',
      icon: mdiDesktopMac,
      label: 'Foods'
    },
    {
      to: '/admin/shops',
      icon: mdiDesktopMac,
      label: 'Shops'
    },
    {
      to: '/admin/finance',
      icon: mdiDesktopMac,
      label: 'Finance'
    },
    {
      to: '/admin/security',
      icon: mdiDesktopMac,
      label: 'Security'
    },
    {
      to: '/admin/blank',
      icon: mdiDesktopMac,
      label: 'Template'
    },
  ],
  'Links',
  [
    {
      href: 'https://www.covid.gov.sg',
      label: 'COVID-19',
      icon: mdiMonitorClean,
      target: '_blank'
    },
    {
      href: 'https://safetravel.ica.gov.sg',
      label: 'Regulations',
      icon: mdiCommaBox,
      target: '_blank'
    }
  ],
  'Template',
  [
    {
      to: '/admin',
      label: 'Home',
      icon: mdiTable,
      updateMark: true
    },
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
  ]
]
