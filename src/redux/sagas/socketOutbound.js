import {takeEvery} from 'redux-saga/effects';
// outbound handles emission of sagas over the socket

// handles starting our session with the server
function startSession(socket, action) {
	try {
		// let server know we want to start our session. we are identified on the
		// backend by our passport session (login) so no payload is needed
		socket.emit("session.start")
	} catch (error) {
		console.log("start session error:", error);
	}
}

// handles sending messages to the server
function sendMessage(socket, action) {
	try {
		// action.payload is expected to be a simple text message, 
		socket.emit('message.send', action.payload)
  } catch (error) {
    console.log('send message error:', error);
  }
}

function editMessage(socket, action) {
	try {
		// action.payload is expected to be a simple text message, 
		socket.emit('message.edit', action.payload)
  } catch (error) {
    console.log('send message error:', error);
  }
}

function deleteMessage(socket, action) {
	try {
		// action.payload is expected to be a simple text message, 
		socket.emit('message.delete', action.payload)
  } catch (error) {
    console.log('delete message error:', error);
  }
}

function getMessages(socket, action) {
	try {
		// action.payload is expected to be a room id for which to get messages, 
		socket.emit('message.getMessages', action.payload)
  } catch (error) {
    console.log('get messages error:', error);
  }
}

function getMembers(socket, action) {
	try {
		// action.payload is expected to be a simple text message, 
		socket.emit('member.getMembers', action.payload)
  } catch (error) {
    console.log('get room members error:', error);
  }
}

function getRooms(socket, action) {
	try {
		// action.payload is expected to be a simple text message, 
		socket.emit('room.getRooms', action.payload)
  } catch (error) {
    console.log('get rooms error:', error);
  }
}

function setRoom(socket, action) {
	try {
		// action.payload is expected to be the id of the room being set as active 
		socket.emit('room.listen', action.payload)
  } catch (error) {
    console.log('get rooms error:', error);
  }
}

function joinTopic(socket, action) {
	try {
		// action.payload is expected to be the topic the user wants to join 
		socket.emit('topic.join', action.payload)
  } catch (error) {
    console.log('join topic error:', error);
  }
}

// export our outbound sagas for use in our main socket saga
export function* outbound(socket) {
	yield takeEvery("SESSION_START", startSession, socket);
	yield takeEvery("SEND_MESSAGE", sendMessage, socket);
	yield takeEvery("EDIT_MESSAGE", editMessage, socket);
	yield takeEvery("DELETE_MESSAGE", deleteMessage, socket);
	yield takeEvery("GET_MESSAGES", getMessages, socket);
	yield takeEvery("GET_MEMBERS", getMembers, socket);
	yield takeEvery("GET_ROOMS", getRooms, socket);
	yield takeEvery("SELECT_CURRENT_ROOM", setRoom, socket);
	yield takeEvery("JOIN_TOPIC", joinTopic, socket);
}