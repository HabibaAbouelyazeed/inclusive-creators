/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

export function DrawerWithNavigation({ course, numberofVideo }) {
  const [open, setOpen] = React.useState(false);
  const [selectedVideo, setSelectedVideo] = useState(numberofVideo);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const gotovideo = (index) => {
    console.log(index);
    const selectVideo = course.videos.find((cou) => cou.id === index);
    setSelectedVideo(selectVideo);
  };

  return (
    <section>
      {course?.title && (
        <Button
          onClick={openDrawer}
          style={{ border: "none", background: "none" }}
          className="text-olive font-bold text-sm bg-pinkGrey shadow-none hover:bg-none hover:scale-105 transition-all duration-1000"
        >
          {course.title}
        </Button>
      )}

      <Drawer open={open} onClose={closeDrawer} className="drawer-cont">
        <div className="mb-2 flex items-center justify-between p-4">
          {course?.title && (
            <Typography variant="h5" color="blue-gray">
              {course.title}
            </Typography>
          )}

          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {course?.videos && (
          <List className="drawer-list">
            {course.videos?.map((video) => (
              <ListItem key={video.id}>
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    onClick={() => {
                      gotovideo(video.id);
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ListItemPrefix>
                {video.title}
              </ListItem>
            ))}
          </List>
        )}
      </Drawer>
    </section>
  );
}
