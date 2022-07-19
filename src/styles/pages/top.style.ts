import { css } from '@emotion/react'
import { colors } from '../global/colors.style'

export const Style = {
  wrapper: css`
    background-color: ${colors.white};
    color: ${colors.black};
  `,
  fvWrapper: css`
    padding: 40px;
  `,
  h1: css`
    color: ${colors.main};
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  `,
  h2: css`
    font-weight: 300;
    font-size: 12px;
    line-height: 19px;
  `,
  textWhite: css`
    color: ${colors.white};
  `,
  diagnoseWrapper: css`
    background-color: ${colors.mainLight};
    width: 100%;
    height: 397px;
    padding: 40px 16px;
    text-align: center;
  `,
  diagnoseContent: css`
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
    border-radius: 16px;
    width: 100%;
    height: 247px;
    margin: 0 auto;
    padding: 24px 16px;
  `,
  diagnoseButton: css`
    color: ${colors.white};
    background-color: ${colors.main};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 100px;
    padding: 16px 32px;
    margin-top: 12px;
  `,
  sectionWrapper: css`
    background-color: ${colors.bg};
  `,
  section: css`
    text-align: center;
    padding-top: 50px;
  `,
}
