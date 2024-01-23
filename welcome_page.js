import { Dimensions, Image } from 'react-native';
// Make the image size proportinal to the screen dimensions
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const imageHeight = dimensions.height;

export default function Welcome() {
    return (
        <>
        <div className="weclome screen">Welcome</div>
            <img
                className="logo"
                src={images / b_b_logo.png}
                alt={'Photo of B and B Logo'}
                style={{
                    width: imageWidth,
                    height: imageHeight
                }}
            />
        </>
    );
}
