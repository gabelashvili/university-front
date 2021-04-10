import React from 'react';
import {
  Div, Filters, Title, FiltersWrapper, IconWrapper,
} from 'components/Home/Header/styles';
import Input from 'components/Inputs/TextInput';
import Button from 'components/Button';
import UniversityIcon from 'Icons/University';
import LocationIcon from 'Icons/Location';
import SearchIcon from 'Icons/Search';

const Header = () => (
  <Div>
    <Filters>
      <Title>იპოვე შენი უნივერსიტეტი</Title>
      <FiltersWrapper>
        <Input type="text" placeholder="უნივერსიტეტი" Icon={UniversityIcon} />
        <Input type="text" placeholder="მდებარეობა" Icon={LocationIcon} />
        <Button
          bgColor="lightGreen"
          cursorType="pointer"
          hoverBgColor="green"
          borderRadius="5px"
        >
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
        </Button>
      </FiltersWrapper>
    </Filters>
  </Div>
);

export default Header;
