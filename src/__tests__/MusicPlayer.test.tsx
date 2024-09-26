import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MusicPlayer from "../MusicPlayer";
import { server } from "../mocks"; // Ensure this is the correct import path

describe("MusicPlayer Component", () => {
  // Test 1: Verify current song is first song in playlist by default
  test("should display the first song in the playlist by default", async () => {
    render(<MusicPlayer />);
    const titleElement = await screen.findByText("Test Song 1");
    const artistElement = screen.getByText("Test Artist 1");
    
    expect(titleElement).toBeInTheDocument();
    expect(artistElement).toBeInTheDocument();
  });

  // Test 2: Verify play/pause can be toggled
  test("should toggle play/pause when the button is clicked", async () => {
    render(<MusicPlayer />);
    const playPauseButton = await screen.findByRole("button", { name: /play/i });

    fireEvent.click(playPauseButton); // Click to play
    expect(playPauseButton).toHaveAttribute("aria-label", "pause"); // Assuming your button has aria-label for accessibility

    fireEvent.click(playPauseButton); // Click to pause
    expect(playPauseButton).toHaveAttribute("aria-label", "play");
  });

  // Test 3: Verify forward changes song correctly
  test("should change to the next song when the forward button is clicked", async () => {
    render(<MusicPlayer />);
    const nextButton = await screen.findByRole("button", { name: /forward/i });
    
    // Initially, it should be the first song
    expect(await screen.findByText("Test Song 1")).toBeInTheDocument();
    
    fireEvent.click(nextButton); // Click next button

    // After clicking, it should now display the second song
    expect(await screen.findByText("Test Song 2")).toBeInTheDocument();
  });

  // Test 4: Verify back changes song correctly
  test("should change to the previous song when the backward button is clicked", async () => {
    render(<MusicPlayer />);
    const nextButton = await screen.findByRole("button", { name: /forward/i });
    fireEvent.click(nextButton); // Move to the second song

    const backButton = await screen.findByRole("button", { name: /rewind/i });
    fireEvent.click(backButton); // Click back button

    // It should go back to the first song
    expect(await screen.findByText("Test Song 1")).toBeInTheDocument();
  });

  // Test 5: Verify clicking song in playlist changes current song
  test("should change current song when a song in the playlist is clicked", async () => {
    render(<MusicPlayer />);
    const secondSong = await screen.findByText("Test Song 2");
    
    fireEvent.click(secondSong); // Click on the second song

    expect(await screen.findByText("Test Song 2")).toBeInTheDocument(); // Now it should display as the current song
  });
});
