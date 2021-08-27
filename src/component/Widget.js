import React from 'react';
import "./css/Widget.css";
import WidgetContent from "./WidgetContent";

function Widget() {
    return (
        <div className="widget">
            <div className="widget_header">
                <h5>Spaces to Follow</h5>
            </div>
            <div className="widget_contents">
                  <WidgetContent />
            </div>
           
        </div>
    );
}

export default Widget;
