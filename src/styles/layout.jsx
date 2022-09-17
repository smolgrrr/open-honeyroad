import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles(theme => ({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 'fit-content',
    //fontFamily: theme.fontFamily,

    margin: {
      top: 0, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '0',
    },
    '& span': {
      // jss-plugin-nested applies this to a child span
    },
  },
  content: {
    width: '100%',
  },
}))

export default useStyles
