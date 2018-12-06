import styled from 'styled-components';
import * as colors from 'web-styles/colors';

export const OrderBook = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors['component-background']};
`;

export const Asks = styled.div`
  height: 47%;
`;

export const Bids = styled.div`
  height: 47%;
`;

export const Spread = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6%;
  padding: 15px;
  border-top: 1px solid ${colors['border-color-base']};
  border-bottom: 1px solid ${colors['border-color-base']}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const HeaderTh = styled.div`
  font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  vertical-align: middle;
  border-color: inherit;
  color: white;
  padding: 8px;
  width: 30%;
`;

export const AsksItemsList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  overflow: auto;
  height: 100%;
  & > div > div:nth-child(1) {
  color: ${colors.red};
  }
  & > div {
    background-color: ${colors['component-background']} !important;
  }
  &:hover > div {
    background-color: ${colors['item-hover-bg']} !important;
  }
  & > div:hover {
    background-color: ${colors['item-hover-bg']} !important;
  }
  & > div:hover ~ div {
    background-color: ${colors['component-background']} !important;
  }
`;

export const BidsItemsList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  & > div > div:nth-child(1) {
  color: ${colors.green};
  }
  & > div {
  background-color: ${colors['component-background']} !important;
  }
  &:hover > div {
  background-color: ${colors['item-hover-bg']} !important;
  }
  & > div:hover {
  background-color: ${colors['item-hover-bg']} !important;
  }
  & > div:hover ~ div {
  background-color: ${colors['component-background']} !important;
  }
`;
