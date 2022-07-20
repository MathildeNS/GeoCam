/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_upload_file_files_exif__post } from '../models/Body_upload_file_files_exif__post';
import type { Body_upload_file_files_upload__post } from '../models/Body_upload_file_files_upload__post';
import type { Body_upload_files_files_upload_files__post } from '../models/Body_upload_files_files_upload_files__post';
import type { Body_upload_zip_files_upload_zip__post } from '../models/Body_upload_zip_files_upload_zip__post';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FilesService {

    /**
     * Get Files
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getFilesFilesGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/',
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * Display File
     * @param name
     * @returns any Successful Response
     * @throws ApiError
     */
    public static displayFileFilesUrlsGet(
        name: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/urls/',
            query: {
                'name': name,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Upload File
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadFileFilesExifPost(
        formData: Body_upload_file_files_exif__post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files/exif/',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Upload File
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadFileFilesUploadPost(
        formData: Body_upload_file_files_upload__post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files/upload/',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Download File
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public static downloadFileFilesDownloadIdGet(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/download/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Upload Files
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadFilesFilesUploadFilesPost(
        formData: Body_upload_files_files_upload_files__post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files/upload_files/',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Upload Zip
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadZipFilesUploadZipPost(
        formData: Body_upload_zip_files_upload_zip__post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files/upload_zip/',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Deployment Files
     * @param deploymentId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readDeploymentFilesFilesDeploymentIdGet(
        deploymentId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/{deployment_id}',
            path: {
                'deployment_id': deploymentId,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
