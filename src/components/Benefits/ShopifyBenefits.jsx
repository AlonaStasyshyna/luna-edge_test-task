import { BsCheck2 } from 'react-icons/bs';
import { List, Item, Title, Text } from './Benefits.styled';

export const ShopifyBenefits = () => {
  return (
    <List>
      <Item>
        <span>
          <BsCheck2 />
        </span>
        <Title>Track orders and shipping</Title>
        <Text>
          Allow your customers to track order and shipping status on Shopify
        </Text>
      </Item>
      <Item>
        <span>
          <BsCheck2 />
        </span>
        <Title>Check inventory</Title>
        <Text>
          Automatically check Shopify inventory when your customers ask for
          replacements
        </Text>
      </Item>
      <Item>
        <span>
          <BsCheck2 />
        </span>
        <Title>Process payments</Title>
        <Text>Process refunds according to your Store Policy</Text>
      </Item>
    </List>
  );
};
