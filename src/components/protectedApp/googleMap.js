// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const defaultProps = {
//     center: {
//      lat: 59.95,
//      lng: 30.33
//     },
//    zoom: 11
// }
// const GoogleMap = () =>{
//    const [center, setCenter] = useState(defaultProps);
// //   static defaultProps = {
// //     center: {
// //       lat: 59.95,
// //       lng: 30.33
// //     },
// //     zoom: 11
// //   };

//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
//           defaultCenter={center.center}
//           defaultZoom={center.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
// }

// export default GoogleMap;
