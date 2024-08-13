import React from "react";
import { profile } from "../data/profileContents";

const ProfileContents: React.FC = () => {
    return (
        <div className="pt-2 pe-4">
            {profile.title}
        </div>
    );
};

export default ProfileContents;
