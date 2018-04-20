import stateCoordinateJSON from '../states';
import { State } from '../state';

var express = require('express');
var router = express.Router();
const states = createStateData(stateCoordinateJSON);

router.post('/', function(req, res, next) {
  res.send(`["${whichState(req.body.longitude, req.body.latitude)}"]`);
});

const whichState = (longitude, latitude) => {
  const point = {
    longitude: longitude,
    latitude: latitude
  };
  let stateAtCoords = 'Not Found';
  states.every(state => {
    if (state.isInside(point)) {
      stateAtCoords = state.name;
      return true;
    } else {
      return true;
    }
  });
  return stateAtCoords;
};

function createStateData(data) {
  return data.map(state => {
    return new State(state);
  });
}

module.exports = router;
