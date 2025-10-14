import SystemStatus from '../../components/SystemStatus/SystemStatus.vue'

export default {
  title: 'Components/Rebranding/SystemStatus',
  component: SystemStatus,
  tags: ['autodocs']
}

export const Default = {
  args: {
    status: 'operational',
    message: 'All systems operational'
  }
}
