import React from 'react';
import * as Icons from "@mui/icons-material";

const IconTag: React.FC<{ iconKey: keyof typeof Icons, className?: string, fontSize?: 'inherit' | 'large' | 'medium' | 'small' }> = ({ iconKey, className, fontSize }) => {
    const Icon = Icons[iconKey];
    return <Icon className={className} fontSize={fontSize} />;
};

export default IconTag
