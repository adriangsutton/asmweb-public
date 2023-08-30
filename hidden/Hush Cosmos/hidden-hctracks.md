---
title: "Hush Cosmos"
description: "Hush Cosmos tracks"
layout: page
permalink: /hc/
---

<h2>Hush Cosmos</h2>

<div class="showreelsContainer">
    <div class="showreelPlaylistOrch">
        <div class="showreelTitleOrch"><h2>Pre-release tracks</h2></div>
        <div class="showreelAudioPlayer">
            {% for track in srHC.hcTracks %}
                <div class="showreelTrack">
                    <p>{{ track.name }}</p> {{ track.details }}
                    <div class="audioTrackRow">
                        <div class="button">
                            <div class="amplitude-play-pause" amplitude-main-play-pause="true" data-amplitude-song-index="{{ track.playerIdx }}"></div>
                        </div>
                        <div class="audioProgress">
                            <input type="range" class="amplitude-song-slider" data-amplitude-song-index="{{ track.playerIdx }}"/>
                        </div>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div>
