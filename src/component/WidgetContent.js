import React from 'react';
import "./css/WidgetContent.css";

function WidgetContent() {
    return (
           <div className="widget_contents">
            <div className="widget_content">
                <img src="https://qphs.fs.quoracdn.net/main-thumb-ti-1735385-100-uoqvdxxwicjvqhonxmvbybuuewpuzbav.jpeg" alt=""/>
               <div className="widget_contentTitle">
                <h5>Web Development Begginers</h5>
                <p>Behind great designs lies Website Development...</p>
            </div>
            </div>
            <div className="widget_content">
                <img src="https://qphs.fs.quoracdn.net/main-thumb-ti-1660233-100-ilxaojrtgqqgrscjubqhhlgkxskfzanh.jpeg" alt=""/>
                <div className="widge_contentTitle">
                    <h5>Job Interview Tips</h5>
                    <p>Get daily updates and info for Tips and Hacks on Jobs..</p>
                </div>
            </div>
            <div className="widget_content">
                <img src="https://qphs.fs.quoracdn.net/main-thumb-ti-1589348-100-qshpsrqjvbeatcpbaxgontqfulzbkgco.jpeg" alt=""/>
                <div className="widge_contentTitle">
                    <h5>Programming</h5>
                    <p>It's all about Computer Programming</p>
                </div>
            </div>
            <div className="widget_content">
                <img src="https://qphs.fs.quoracdn.net/main-thumb-ti-1576125-100-zoiprhpkholdvzvfqoquikmrkfacdjsb.jpeg" alt=""/>
                <div className="widge_contentTitle">
                    <h5>Engineering Education</h5>
                    <p>A space for information regarding Engineering stuffs</p>
                </div>

            </div>
        </div>
    );    
}

export default WidgetContent;
