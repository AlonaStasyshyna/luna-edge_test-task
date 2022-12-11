import { BsCheck2 } from 'react-icons/bs';
import { List, Item, Title, Text } from './Benefits.styled';

export const GoogleBenefits = () => {
  return (
    <List>
      <Item>
        <span>
          <BsCheck2 />
        </span>
        <Title>Automated rote responses</Title>
        <Text>
          Lets your customers know that you’ve received their support request
          and are working on it{' '}
        </Text>
      </Item>
      <Item>
        <span>
          <BsCheck2 />
        </span>
        <Title>Customized situational responses</Title>
        <Text>
          Designate auto responses to any support situation ranging from
          “where’s my stuff?” to “I want a refund”
        </Text>
      </Item>
      <Item>
        <span>
          <BsCheck2 />
        </span>
        <Title>Automatically tags inbox by category</Title>
        <Text>
          Reads your inbound support emails and tags your emails with the
          problem category so you always know what to expect before even opening
          an email
        </Text>
      </Item>
    </List>
  );
};
