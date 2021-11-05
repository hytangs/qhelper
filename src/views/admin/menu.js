import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiCommaBox,
  mdiMonitorClean,
  mdiBed,
  mdiMedicalBag,
  mdiFood,
  mdiStore,
  mdiCashMultiple,
  mdiSecurity,
  mdiQrcode

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
      icon: mdiBed,
      label: 'Rooms',
    },
    {
      to: '/admin/health',
      icon: mdiMedicalBag,
      label: 'Health',
    },
    {
      to: '/admin/foodselection',
      icon: mdiFood,
      label: 'Food'
    },
    {
      to: '/admin/shops',
      icon: mdiStore,
      label: 'Shops'
    },
    {
      to: '/admin/finance',
      icon: mdiCashMultiple,
      label: 'Finance'
    },
    {
      to: '/admin/security',
      icon: mdiSecurity,
      label: 'Security'
    },
    {
      to: '/admin/qrpass',
      icon: mdiQrcode,
      label: 'QR Pass'
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
]
