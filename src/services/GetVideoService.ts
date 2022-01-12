import { getRepository } from 'typeorm';

import { Video } from './../entities/Video';

export class GetVideoService {

    async execute (id: string) {
        const repo = getRepository(Video);

        const video = await repo.findOne(id, {
            relations: ["category"]
        });

        if (!video) {
            return new Error("Video does not exists");
        }

        return video;
    }
}
