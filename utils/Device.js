import { Dimensions } from 'react-native';

// minimum Android Tablet dimensions
const tablet = {
  width: 552,
  height: 960,
};

// calculate whether the current device is a phone or tablet, based on screen dimensions
class Device {
  getPortraitDimensions() {
    const { width, height } = Dimensions.get("window");

    return {
      width: Math.min(width, height),
      height: Math.max(width, height),
    };
  }

  getLandscapeDimensions() {
    const { width, height } = Dimensions.get("window");

    return {
      width: Math.max(width, height),
      height: Math.min(width, height),
    };
  }

  isPhone() {
    const dimension = this.getPortraitDimensions();
    return dimension.height < tablet.height;
  }

  isTablet() {
    const dimension = this.getPortraitDimensions();
    return dimension.height >= tablet.height;
  }
}

const device = new Device();
export default device;
