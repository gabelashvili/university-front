/* eslint-disable no-unused-vars */
import {
  Div,
  Box,
  Title,
  Content,
  ProfilePhoto,
  Img,
  uploadButton,
  UploadInput,
  InputWrapper,
  Label,
  Input,
  saveButton,
  Error,
} from 'components/UserPage/Profile/MyProfile/styles';
import Button from 'components/Button';
import UploadIcon from 'Icons/Upload';
import FbIcon from 'Icons/Fb';
import useMyProfileHook from 'components/UserPage/Profile/MyProfile/hook';
import DefaultAvatar from '../../../../assets/defaultProfile.png';

const MyProfile = () => {
  const {
    onPersInfoSubmit,
    onPersInfoSubmitError,
    registerPersInfo,
    handlePersInfoSubmit,
    persInfoErrors,
    registerPasswordChange,
    newPassword,
    onPasswordChangeSubmit,
    onPassworChangeSubmitError,
    handlePasswordChange,
    passwordChangeErrors,
    image,
    handleUpload,
  } = useMyProfileHook();
  return (
    <Div>
      <Box>
        <Title>მომხმარებლის დეტალები</Title>
        <Content>
          <ProfilePhoto>
            <Img src={image?.url || DefaultAvatar} alt="" />
            <Button costumStyles={uploadButton}>
              <UploadInput
                type="file"
                accept="image/png, image/jpeg"
                onInput={(e) => handleUpload(e)}
                onClick={(e) => {
                  e.target.value = null;
                }}
              />
              <UploadIcon />
              სურათის ატვირთვა
            </Button>
          </ProfilePhoto>
          <InputWrapper>
            <Label>სახელი</Label>
            {persInfoErrors.firstName && <Error>{persInfoErrors.firstName.message}</Error>}
            <Input
              isError={!!persInfoErrors.firstName}
              type="text"
              {...registerPersInfo('firstName', {
                required: { value: true, message: 'შეიყვანეთ სახელი' },
                maxLength: { value: 10, message: 'სახელი უნდა შეიცავდეს მაქსიმუმ 10 სიმბოლოს' },
                minLength: { value: 2, message: 'სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს' },
              })}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>გვარი</Label>
            {persInfoErrors.lastName && <Error>{persInfoErrors.lastName.message}</Error>}
            <Input
              isError={!!persInfoErrors.lastName}
              type="text"
              {...registerPersInfo('lastName', {
                required: { value: true, message: 'შეიყვანეთ გვარი' },
                maxLength: { value: 20, message: 'გვარი უნდა შეიცავდეს მაქსიმუმ 20 სიმბოლოს' },
                minLength: { value: 2, message: 'გვარი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს' },
              })}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Email</Label>
            {persInfoErrors.email && <Error>{persInfoErrors.email.message}</Error>}
            <Input
              isError={!!persInfoErrors.email}
              type="text"
              {...registerPersInfo('email', {
                required: { value: true, message: 'შეიყვანეთ Email' },
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'მითითებული Email - ი არასწორია',
                },
              })}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>
              <FbIcon />
              Facebook
            </Label>
            <Input type="text" />
          </InputWrapper>
          <Button
            costumStyles={saveButton}
            type="button"
            handleClick={handlePersInfoSubmit(onPersInfoSubmit, onPersInfoSubmitError)}
          >
            ცვლილებების შენახვა
          </Button>
        </Content>
      </Box>
      <Box>
        <Title>პაროლის შეცვლა</Title>
        <Content>
          <InputWrapper>
            <Label>ძველი პაროლი</Label>
            {passwordChangeErrors.oldPassword
             && <Error>{passwordChangeErrors.oldPassword.message}</Error>}
            <Input
              type="text"
              isError={!!passwordChangeErrors.oldPassword}
              {...registerPasswordChange('oldPassword', {
                required: {
                  value: true,
                  message: 'შეიყვანეთ ძველი პაროლი',
                },
              })}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>ახალი პაროლი</Label>
            {passwordChangeErrors.newPassword
             && <Error>{passwordChangeErrors.newPassword.message}</Error>}
            <Input
              type="text"
              isError={!!passwordChangeErrors.newPassword}
              {...registerPasswordChange('newPassword', {
                required: {
                  value: true,
                  message: 'შეიყვანეთ ახალი პაროლი',
                },
                minLength: {
                  value: 8,
                  message: 'პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან',
                },
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[A-Za-z0-9\d#?!@$%^&*-]{8,}$/,
                  message: 'პაროლი უნდა შეიცავდეს სიმბოლოებს, დიდ და პატარა ასოებს',
                },
              })}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>გაიმეორეთ ახალი პაროლი</Label>
            {passwordChangeErrors.repeatPassword
             && <Error>{passwordChangeErrors.repeatPassword.message}</Error>}
            <Input
              type="text"
              isError={!!passwordChangeErrors.repeatPassword}
              {...registerPasswordChange('repeatPassword', {
                validate: (value) => value === newPassword || 'პაროლი არ ემთხვევა',
                required: {
                  value: true,
                  message: 'გაიმეორეთ ახალი პაროლი',
                },
              })}
            />
          </InputWrapper>
          <Button
            costumStyles={saveButton}
            type="button"
            handleClick={handlePasswordChange(onPasswordChangeSubmit, onPassworChangeSubmitError)}
          >
            შეცვლა
          </Button>
        </Content>
      </Box>
    </Div>
  );
};

export default MyProfile;
