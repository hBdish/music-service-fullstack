import {Flex, FlexProps} from '@/components/stack/flex/flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => {
  return <Flex direction="row" {...props} />;
};
