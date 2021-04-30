package com.restaurant.management.controller;

import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.BlobServiceClientBuilder;
import com.azure.storage.blob.specialized.BlockBlobClient;
import com.azure.storage.common.StorageSharedKeyCredential;
import com.azure.storage.file.share.ShareServiceClient;
import com.azure.storage.file.share.ShareServiceClientBuilder;
import lombok.SneakyThrows;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Locale;

@Component
public class AzureStorage {

    private static final String SAS = "?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-04-30T19:18:14Z&st=2021-04-29T11:18:14Z&spr=https,http&sig=6BmiseqYUScc9zB6TRj2uq3nMe%2B4%2FmB2wTpTQaOmOBk%3D";

    private static final String CONNECTION_STRING = "DefaultEndpointsProtocol=https;AccountName=rmsfiles;AccountKey=Pdeyfz7cTC/oQjR2ZavaVXG/yFVyF4JPCLlvTKKAvn1OW/Kde8MnLIHxr/Y4J+spJJlUNKFO0uf1FQS0rakY8w==;EndpointSuffix=core.windows.net";

    private static final String SHARE_NAME = "images";

    private static final String ACCOUNT_NAME = "rmsfiles";

    private static final String ACCOUNT_KEY = "Pdeyfz7cTC/oQjR2ZavaVXG/yFVyF4JPCLlvTKKAvn1OW/Kde8MnLIHxr/Y4J+spJJlUNKFO0uf1FQS0rakY8w==";

    private final ShareServiceClient shareServiceClient = new ShareServiceClientBuilder().connectionString(CONNECTION_STRING).buildClient();

    private static final StorageSharedKeyCredential credential = new StorageSharedKeyCredential(ACCOUNT_NAME, ACCOUNT_KEY);

    private static final String endpoint = String.format(Locale.ROOT, "https://%s.blob.core.windows.net", ACCOUNT_NAME);

    private final BlobServiceClient storageClient = new BlobServiceClientBuilder().endpoint(endpoint).credential(credential).buildClient();

    private final BlobContainerClient blobContainerClient = storageClient.getBlobContainerClient("$web");

    private final static String SOURCE_URL = "https://rmsfiles.blob.core.windows.net/$web/";

    @SneakyThrows
    public String createFile(String filePath, byte[] data) {
        BlockBlobClient blobClient = blobContainerClient.getBlobClient(filePath).getBlockBlobClient();

        InputStream dataStream = new ByteArrayInputStream(data);

        blobClient.upload(dataStream, data.length, true);
        dataStream.close();

        return SOURCE_URL + filePath;
    }

    public void deleteFile(String fileName) {
        BlockBlobClient blobClient = blobContainerClient.getBlobClient(fileName).getBlockBlobClient();

        blobClient.delete();
    }
}
