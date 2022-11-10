package instances

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/aws/aws-sdk-go-v2/service/s3"
	. "github.com/mlabouardy/komiser/models"
	. "github.com/mlabouardy/komiser/providers"
)

func Buckets(ctx context.Context, client ProviderClient) ([]Resource, error) {
	resources := make([]Resource, 0)
	if client.AWSClient.Region == "us-east-1" {
		var config s3.ListBucketsInput
		s3Client := s3.NewFromConfig(*client.AWSClient)
		output, err := s3Client.ListBuckets(context.Background(), &config)
		if err != nil {
			return resources, err
		}

		for _, bucket := range output.Buckets {
			tagsResp, err := s3Client.GetBucketTagging(context.Background(), &s3.GetBucketTaggingInput{
				Bucket: bucket.Name,
			})

			tags := make([]Tag, 0)
			if err == nil {
				for _, t := range tagsResp.TagSet {
					tags = append(tags, Tag{
						Key:   *t.Key,
						Value: *t.Value,
					})
				}
			}

			resourceArn := fmt.Sprintf("arn:aws:s3:::%s", *bucket.Name)

			resources = append(resources, Resource{
				Provider:   "AWS",
				Account:    client.Name,
				Service:    "S3",
				Region:     client.AWSClient.Region,
				ResourceId: resourceArn,
				Name:       *bucket.Name,
				Cost:       0,
				CreatedAt:  *bucket.CreationDate,
				Tags:       tags,
				FetchedAt:  time.Now(),
			})
		}
	}
	log.Printf("[%s] Fetched %d AWS S3 buckets from %s\n", client.Name, len(resources), client.AWSClient.Region)
	return resources, nil
}
