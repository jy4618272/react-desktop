export default {
  titleBar: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    WebkitAppRegion: 'drag',
    cursor: 'default',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    minHeight: '22px',
    backgroundImage: '-webkit-linear-gradient(top, #ededed 0, #ededed 1px, #e7e7e7 2px, #d1d1d1 100%)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#afafaf',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#f6f6f6',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    paddingLeft: '3px',
    paddingRight: '3px'
  },

  unfocusedTitleBar: {
    backgroundImage: '-webkit-linear-gradient(top, #fafafa 0px, #f6f6f6 2px, #f6f6f6 100%)',
    borderBottomColor: '#d1d1d1'
  },

  title: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
    fontSize: '13px',
    letterSpacing: '0.5px',
    color: '#4d4d4d',
    flexGrow: '1',
    flexShrink: '1',
    textAlign: 'center',
    lineHeight: '22px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },

  titleInset: {
    paddingRight: '5px'
  },

  unfocusedTitle: {
    color: '#d3d3d3'
  }
};
