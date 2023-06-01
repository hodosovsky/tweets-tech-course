import styled from 'styled-components';

export const PictureStyled = styled.picture`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const AvatarStyled = styled.img`
  top: 178px;
  left: 150px;
  width: 64px;
  height: 64px;
  border: 8px solid ${p => p.theme.colors.followButtonBackground};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.avatarBackground};
`;
