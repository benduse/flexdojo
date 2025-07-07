// src/components/BeltIndicator/BeltIndicator.stories.jsx
import { BeltIndicator } from './BeltIndicator';

export default {
  title: 'Components/BeltIndicator',
  component: BeltIndicator,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#111827' },
        { name: 'light', value: '#f3f4f6' },
      ],
    },
  },
};

export const Default = {
  args: {
    currentBelt: 'white',
    xp: 0,
  },
};

export const YellowBelt = {
  args: {
    currentBelt: 'yellow',
    xp: 150,
  },
};

export const BlackBelt = {
  args: {
    currentBelt: 'black',
    xp: 5000,
  },
};

export const AllBelts = () => (
  <div className="space-y-4">
    {['white', 'yellow', 'orange', 'green', 'blue', 'brown', 'black'].map(belt => (
      <BeltIndicator key={belt} currentBelt={belt} xp={0} />
    ))}
  </div>
);