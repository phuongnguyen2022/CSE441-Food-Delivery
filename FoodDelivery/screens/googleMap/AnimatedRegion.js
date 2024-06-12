import MapView, { AnimatedRegion, Animated } from 'react-native-maps';
const AnimatedRegion  = () =>{
getInitialState() {
  return {
    region: new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
  };
}

onRegionChange(region) {
  this.state.region.setValue(region);
}

render() {
  return (
    <Animated
      region={this.state.region}
      onRegionChange={this.onRegionChange}
    />
  );
}
}