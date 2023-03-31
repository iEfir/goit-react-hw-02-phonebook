import PropTypes from 'prop-types';
import { Btn, Container, Item, Text } from './Contacts.styled';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <Container>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Btn
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </Btn>
          </Item>
        ))}
      </ul>
    </Container>
  );
};

export { Contacts };

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
