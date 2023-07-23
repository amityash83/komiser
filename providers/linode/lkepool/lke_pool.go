package lkepool

import (
	"context"
	"fmt"
 "strings"
	"time"

	"github.com/linode/linodego"
	log "github.com/sirupsen/logrus"

	"github.com/tailwarden/komiser/models"
	"github.com/tailwarden/komiser/providers"
)

type LinodeLKENodePool struct {
	NodePool *linodego.LKECluster `json:"node_pool"`
}

func LKENodePools(ctx context.Context, client providers.ProviderClient) ([]models.Resource, error) {
	resources := make([]models.Resource, 0)

	nodePools, err := client.LinodeClient.ListLKENodePools(ctx,int, &linodego.ListOptions{})
	if err != nil {
		return resources, err
	}

	for _, nodePool := range nodePools {
		tags := make([]models.Tag, 0)
		for _, tag := range nodePool.Tags {
			if strings.Contains(tag, ":") {
				parts := strings.Split(tag, ":")
				tags = append(tags, models.Tag{
					Key:   parts[0],
					Value: parts[1],
				})
			} else {
				tags = append(tags, models.Tag{
					Key:   tag,
					Value: tag,
				})
			}
		}

		resources = append(resources, models.Resource{
			Provider:   "Linode",
			Account:    client.Name,
			Service:    "Linode Kubernetes Engine",
			// Region:     nodePool.Region,
			ResourceId: fmt.Sprintf("%d", nodePool.ID),
			Cost:       0,
			// Name:       nodePool.Label,
			FetchedAt:  time.Now(),
			CreatedAt:  time.Time{}, // Update this with the actual created time.
			Tags:       tags,
			Link:       fmt.Sprintf("https://cloud.linode.com/kubernetes/clusters/%d", nodePool.ID),
			// Add any additional fields or data you want to collect here.
		})
	}

	log.WithFields(log.Fields{
		"provider":  "Linode",
		"account":   client.Name,
		"service":   "Linode Kubernetes Engine",
		"resources": len(resources),
	}).Info("Fetched LKE node pools")
	return resources, nil
}
