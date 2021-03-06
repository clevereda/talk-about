import React from "react";
import { connect } from "react-redux";
import { Box, Typography, Divider } from "@material-ui/core";

class MemberList extends React.Component {
  render() {
		console.log(this.props.members);
    return (
      <Box
        padding={1}
        margin={1}
        display="flex"
        flexDirection="column"
        flexGrow={1}
        bgcolor="secondary.light"
        borderRadius={5}
        overflow="hidden"
      >
        <Typography variant="h6">Room Members</Typography>
				<Divider />
        {this.props.members?.map((cur, i) => (
          <Typography key={`member-${i}`} variant="subtitle1" style={{ fontSize: 16 }}>
            {cur.username}
          </Typography>
        ))}
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return { members: state.memberLists[state.currentRoom.id] };
};

export default connect(mapStateToProps)(MemberList);
