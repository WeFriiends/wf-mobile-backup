import LockOrientation from '../../lib/utils/LockOrientation'

const getOrientation = async () => {
    const orientation = await LockOrientation()
    return orientation;
   // setOrientation(orientation)
  }

  export default getOrientation;