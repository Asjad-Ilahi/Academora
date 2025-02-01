import React from "react";
import { UserSectionCreatePost } from "./Components/UserSectionCreatePost/userSectionCreatePost.jsx";
import { CreatePostMainContent } from "./Components/createPostMainContent/createPostMainContent.jsx";
import Layout from "../../components/layout/layout.jsx";

export default function CreatePost() {
    return (
        <Layout>
            <UserSectionCreatePost />
            <CreatePostMainContent />
        </Layout>
    );
}