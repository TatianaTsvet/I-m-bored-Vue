export interface IActivity {
    activity: string;
    type: string;
    participants: number;
    key: number;
    
  }
  export interface IResponse {
    message?: string;
  }
  export interface ISnackbarProps {
    suggestResponse: IResponse;
    snackbar: boolean;
    snackbarClose: () => void;
  }
  export interface ISpinnerProps {
    loading: boolean;
  }
  
  interface IFavoriteActivity {
    activity: string;
    type: string;
    key: number;
    participants: number;
    liked?: boolean;
  }
  export interface IFavoriteActivitiesProps {
    activities: IFavoriteActivity[];
    input: string;
    checked: string[];
    count: number;
    drawerType: string;
  }
  
  export interface ISearchFieldProps {
    onCheckFilter: (title: string, checked: boolean) => void;
    onSearch: (value: string) => void;
    onCountChange: (count: number) => void;
    count: number;
  }
  
  export interface IFilterProps {
    switchType: (title: IFilterProps["title"], checked: boolean) => void;
    title: string;
    icon: any[];
  }
  export interface IJokesData {
    id: string;
    joke: string;
  }
  export interface ISearchProps {
    checked: boolean;
  }
  export interface IJokesItemsProps {
    id: string;
    joke: string;
  }
  export interface IJokesShareModal {
    joke: string;
    open: boolean;
    openShareModal: (modal: boolean) => void;
  }
  export interface ISendSuggestion {
    activity: string;
    type: string;
    participants: number;
  }