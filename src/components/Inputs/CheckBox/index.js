import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
    display: flex;
    align-items: center;
`;
const Input = styled.input`
    background-color: transparent;
    position: relative;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.lightGreen};
    transition: all 0.1s;
    margin-right: 10px;
    &:before {
        content: " ";
        position: absolute;
        top: 50%;
        right: 50%;
        bottom: 50%;
        left: 50%;
        ${({ checked }) => (checked && css`
            top: 2px;
            right: 2px;
            bottom: 2px;
            left: 2px;
        `)};
        transition: all 0.1s;
        background: ${({ theme }) => theme.colors.lightGreen};
    }
`;
const Label = styled.p``;

const CheckBox = ({ handleChange, isChecked, label }) => (
  <Div>
    <Input type="checkbox" checked={isChecked} onChange={handleChange} />
    <Label>{label}</Label>
  </Div>
);

CheckBox.propTypes = {
  handleChange: PropTypes.func,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
};

export default CheckBox;
