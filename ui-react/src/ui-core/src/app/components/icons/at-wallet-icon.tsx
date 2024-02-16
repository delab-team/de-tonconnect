import type { Property } from 'csstype';
import { Component } from 'solid-js';
import { useTheme } from 'solid-styled-components';
import { Styleable } from 'src/app/models/styleable';

interface AtWalletIconProps extends Styleable {
    fill?: Property.Color;
}

export const AtWalletIcon: Component<AtWalletIconProps> = props => {
    const theme = useTheme();
    const fill = (): string => props.fill || theme.colors.constant.white;

    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 9.33337V23.3667L22.1927 25.6667H8.18143V21.0001H3.5V6.9999H8.18143V2.33333H17.5111L24.5 9.33337ZM19.8519 21V11.6667L15.1704 6.99999L8.18143 6.9999V21.0001L19.8519 21Z" fill="white"/>
        </svg>
        
    );
};
