import dynamic from 'next/dynamic';

const BytemdViewer = dynamic(() => import('./viewer'));

export { BytemdViewer };
