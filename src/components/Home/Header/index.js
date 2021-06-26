/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Div, Filters, Title, FiltersWrapper, IconWrapper,
} from 'components/Home/Header/styles';
import Input from 'components/Inputs/TextInput';
import Button from 'components/Button';
import UniversityIcon from 'Icons/University';
import LocationIcon from 'Icons/Location';
import SearchIcon from 'Icons/Search';
import { actions as getFilteredUniListActions } from 'modules/University/GetFilteredUniList';
import Container from 'components/Container';

const Header = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState({
    university: '',
    location: '',
  });

  useEffect(() => {
    if (search.location.length > 0 || search.university.length > 0) {
      dispatch(getFilteredUniListActions.getFilteredUniList.request({
        university: search.university,
        location: search.location,
      }));
    }
    if (search.location.length === 0 && search.university.length === 0) {
      dispatch(getFilteredUniListActions.getFilteredUniList.reset());
    }
  }, [search]);

  return (
    <Div>
      <Filters>
        <Container>

          <Title>იპოვე შენი უნივერსიტეტი</Title>
          <FiltersWrapper>
            <Input
              value={search.university}
              type="text"
              placeholder="უნივერსიტეტი"
              Icon={UniversityIcon}
              onChange={(e) => setSearch({ ...search, university: e.target.value })}
            />
            <Input
              value={search.location}
              type="text"
              placeholder="მდებარეობა"
              Icon={LocationIcon}
              onChange={(e) => setSearch({ ...search, location: e.target.value })}
            />
            <Button
              bgColor="lightGreen"
              cursorType="pointer"
              hoverBgColor="green"
              borderRadius="5px"
              type="button"
            >
              <IconWrapper>
                <SearchIcon />
              </IconWrapper>
            </Button>
          </FiltersWrapper>
        </Container>
      </Filters>
    </Div>
  );
};

export default Header;
