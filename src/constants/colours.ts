export interface IColours {
  primaryThemeColour: string;
  primaryInverseColour: string;

  pageBackgroundColour: string;
  elevatedComponentColour: string;
  elevatedComponentInverseColour: string;

  highPrimaryBackground: string;
  midPrimaryBackground: string;
  lightPrimaryBackground: string;
  lighterPrimaryBackground: string;

  subtextColour: string;
  defaultTextColour: string;
}

export const colours: IColours = {
  primaryThemeColour: '#f39766',
  primaryInverseColour: '#f7f6f7',

  pageBackgroundColour: '#f3f2ef',
  elevatedComponentColour: '#fcfcfc',
  elevatedComponentInverseColour: '#242424',

  highPrimaryBackground: '#f39766e3',
  midPrimaryBackground: '#f397669c',
  lightPrimaryBackground: '#f397666b',
  lighterPrimaryBackground: '#f397663d',

  subtextColour: 'rgba(0,0,0,0.6)',
  defaultTextColour: 'black',
};
